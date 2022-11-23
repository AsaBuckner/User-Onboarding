import * as yup from "yup"


const formSchema = yup.object().shape({
    
    first_name: yup
    //theses are the things we are checking for//
    
        .string()
        //is it a string
    
        .trim()
        /*cut out any extra white 
        space/extra spaces*/

        .min(2,"name must be atleast 2 Charcters")
    
        .required("Please Enter your first name"),
        /*Makes sure there is something 
        typed in the input box*/
    
    last_name: yup
    //theses are the things we are checking for//
    
        .string()
        //is it a string
    
        .trim()
        /*cut out any extra white 
        space/extra spaces*/
    
        .min(2,"name must be atleast 2 Charcters")

        .required("Please Enter your last Name"),
        /*Makes sure there is something 
        typed in the input box*/

    email: yup
        .string()
    
        .trim()
    
        .email("Not a Valid Email")
        /* Must have an @ and a .com */
    
        .required("Please Enter An Email"),

    password: yup
        //theses are the things we are checking for//
        
        .string()
        //is it a string
    
        .trim()
        /*cut out any extra white 
        space/extra spaces*/
    
        .required("Please Enter A Password")
        /*Makes sure there is something 
        typed in the input box*/

        .min(8, "Password must be atleast (8) characters long"),

    terms : yup
    
        .boolean(false),
    
    })
    
    
    export default formSchema