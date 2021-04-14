describe('four-rule-calculations', () => {

  const operandData1 = Array.from({length: 9}, (_, i) => i + 1) // 1~9 숫자
  const operandData2 = [...Array(10).keys()] //0~9 숫자
  const operator = ['+', '-', '/', 'X']
  const operators = {
    '+': (op1, op2) => op1 + op2,
    '-': (op1, op2) => op1 - op2,
    'X': (op1, op2) => op1 * op2, 
    '/': (op1, op2) => op1 / op2
  };

  beforeEach(() => {
    cy.visit('http://localhost:5501')
  })

  
//   operandData1.forEach(n1 => {
//     operandData2.forEach(n2 => {
//       operator.forEach(op => { 
//         it('한자리 숫자 두 개의 사칙연산', () => {
//           cy.get(`[data-cy=${n1}]`).click()
//           cy.get(`[data-cy='${op}']`).click()
//           cy.get(`[data-cy=${n2}]`).click()
//           cy.get(`[data-cy='=']`).click()
//           cy.get('#total').should(($total) => {
//             expect(parseInt($total.get(0).innerText)).to.eq(operators[op](n1, n2))
//           })
//         })
//       }) 
//   })
// })

it('AC(All Clear)버튼을 누르면 0으로 초기화 한다.', () => {
  cy.get(`[data-cy=3]`).click() 
  cy.get(`[data-cy='+']`).click()

  cy.get(`[data-cy="AC"]`).click()

  cy.get('#total').should(($total) => {
    expect(parseInt($total.get(0).innerText)).to.eq(0)
  })
})

it('숫자는 한번에 최대 3자리 수까지 입력 가능하다.', () => {
  const stub = cy.stub()

  cy.on('window:alert', stub)

  cy.get(`[data-cy=3]`).click() 
  cy.get(`[data-cy=4]`).click() 
  cy.get(`[data-cy=5]`).click() 
  cy.get(`[data-cy=6]`)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("숫자는 세 자리까지만 입력 가능합니다!")
      }) 
  
})

})