class Register_Page{
    home_page(){
        cy.visit("https://magento.softwaretestingboard.com/")
    }

    registration_Page(){
        cy.get('ul li a[href="https://magento.softwaretestingboard.com/customer/account/create/"]').first().click()
    }

    create_account(firstName, lastName, email, Password, confirmPassword){
        cy.url().should('include', '/customer/account/create/')
        cy.get('#firstname').type(firstName)
        cy.get('#lastname').type(lastName)
        cy.get('#email_address').type(email)
        cy.get('[title="Password"]').type(Password)
        cy.get('input[name="password_confirmation"]').type(confirmPassword)
    }

    submit(){
        cy.contains('button', 'Create an Account').click()
    }

    Validate_Login_Page_url(){
        cy.url().should('include', '/customer/account/')
    }

    validate_registration_details(){
        cy.get('.message-success div').then((message)=>{
            const alert_message = message.text()
            expect(alert_message).to.be.include('Thank you for registering with Main Website Store.')
        })
    }

}
export default Register_Page;

    