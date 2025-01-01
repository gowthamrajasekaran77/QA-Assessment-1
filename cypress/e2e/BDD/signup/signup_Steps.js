import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { fa, faker } from '@faker-js/faker';
import Register_Page from "../../BDD_Pages/registration_Page";


const register = new Register_Page;


let email = faker.internet.email()
let password = "Test1234@"

Given("The user is on the registration page", ()=>{
    register.home_page()
    register.registration_Page()
})

When("The user fills in valid account details", ()=>{

    register.create_account(faker.person.firstName(), faker.person.lastName(), email, password, "Test1234@")

})

When("Submits the form", ()=>{
    register.submit()
})

Then("The account should be created successfully",()=>{
    register.validate_registration_details()
    register.Validate_Login_Page_url()
})
