describe("Quotes App", () => {

    beforeEach(() => {

        cy.visit("http://localhost:3000/")

    })


    //HELPERS / GETTERS//
    //pull in the elements that yoou want to test
    // cyntax const _____ = () => cy.get("_(comp.type)[__(name/id/how its identified)__]__")

    const firstInput = () => cy.get("input[name=first_name]")
    const lastInput = () => cy.get("input[name=last_name]")
    const emailInput = () => cy.get("input[name=email]")
    const passwordInput = () => cy.get("input[name=password]")
    const terms = () => cy.get("input[name=terms]")
    const submitBttn = () => cy.get("button[class=submit_Button]")

    //Running the test --

        it("sanity check to make sure test works", () => {

        //"it" is how you initulize a test
        //"expect" is an assertion
        //there can be multiple assertions per test
        //but they all need to relate to the 
        //one thing being tested

            expect(1 + 2).to.equal(3);

            expect(2 + 2).not.equal(5) //strict equality-- ===   does not do type coercion

            expect({}).not.to.equal({}) 

            expect({}).to.eql({})

        }) 


    //CI/CD => Conotinuos Intergration/Continuos Delivery
    //when you push code to prod or stage it will push it back if something is wrong



        it("the proper elements are showing", () => {

            firstInput().should("exist"),
            lastInput().should("exist"),
            emailInput().should("exist"),
            passwordInput().should("exist"),
            terms().should("exist")
            
        })


    describe('Filling out the inputs & testing submit ', () => {
        it("Inputs are typable", () => {

            firstInput().type("firstName-Test"),
            lastInput().type("lastName-Test"),
            emailInput().type("email@Test.com"),
            passwordInput().type("password-test")

        })


        it("submit button starts disabled", () => {

            submitBttn().should('be.disabled')

        })


        it("submit button works", () => {

            firstInput().type("firstName-Test"),
            lastInput().type("lastName-Test"),
            emailInput().type("email@Test.com"),
            passwordInput().type("password-test")

            submitBttn().should('not.be.disabled')
            submitBttn().click()

            

        })

    })



    describe("Check form Validation shows an error", () => {

        it("Error message posts if first name input is not valid", () => {

            firstInput().type("p")
            cy.contains(/name must be atleast 2 Charcters/i).should('exist')

        })

        it("Error message posts if last name input is not valid", () => {

            lastInput().type("p")
            cy.contains(/name must be atleast 2 Charcters/i).should('exist')
        })

        it("Error message posts if email input is not valid", () => {

            emailInput().type("p")
            cy.contains(/Not a Valid Email/i).should('exist')
        
        })

        it("Error message posts if password input is not valid", () => {

            passwordInput().type("p")
            cy.contains(/Password must be/).should('exist')

        })

    })

})