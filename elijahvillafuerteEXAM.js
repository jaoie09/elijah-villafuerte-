describe('', function()
{
	it('Verify the title of the page - positive testing', function()
	{
	cy.visit('https://billease.ph')
	cy.title().should('eq','BillEase. Get your purchase on installments now. No credit card needed!')
	})
	
	it('Verify the title of the page - negative testing', function()
	{
	cy.visit('https://billease.ph')
	cy.title().should('eq','BillEase. sample ramdom title')
	})
	
	it('if the installment amount is updating when you select installment terms 2', function()
	{
	cy.visit('https://billease.ph')
	cy.title().should('eq','BillEase. Get your purchase on installments now. No credit card needed!')
	cy.get('.btn').click() 
	cy.focused().click()
	cy.contains('1').click() 
	})
	
	it('if the installment amount is updating when you select installment terms 4', function()
	{
	cy.visit('https://billease.ph')
	cy.title().should('eq','BillEase. Get your purchase on installments now. No credit card needed!')
	cy.get('.btn').click() 
	cy.focused().click()
	cy.contains('4').click() 
	})
	
	it('if the installment amount is updating when you select installment terms 6', function()
	{
	cy.visit('https://billease.ph')
	cy.title().should('eq','BillEase. Get your purchase on installments now. No credit card needed!')
	cy.get('.btn').click() 
	cy.focused().click()
	cy.contains('4').click() 
	})
	
})

