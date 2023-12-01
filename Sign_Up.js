import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';




const supabase_url = 'https://todxjbqzlxjjdiccyzuu.supabase.co';
const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvZHhqYnF6bHhqamRpY2N5enV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1NDgwMzUsImV4cCI6MjAxNjEyNDAzNX0.PyducfY0_Qo3vvOZHJ7CMllHMbymQZs-Sg61A3ZkgHc";

const supabase = createClient(supabase_url, anon_key);




const loginForm = document.getElementById('signupFor');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');



loginForm.addEventListener('click', function(event) {
        event.preventDefault(); 

  

        async function signUpNewUser() {
            const { data, error } = await supabase.auth.signUp({
              email:  emailInput.value,
              password:  passwordInput.value,
              options: {
                emailRedirectTo: 'http://127.0.0.1:5501/register.html'
              }

            })

            console.log(data)
          
        
        }

        signUpNewUser()








    console.log('Form submitted');
    console.log('Email: ', emailInput.value);
    console.log('Password: ', passwordInput.value);


});