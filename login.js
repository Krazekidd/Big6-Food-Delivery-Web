import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';




const supabase_url = 'https://todxjbqzlxjjdiccyzuu.supabase.co';
const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvZHhqYnF6bHhqamRpY2N5enV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1NDgwMzUsImV4cCI6MjAxNjEyNDAzNX0.PyducfY0_Qo3vvOZHJ7CMllHMbymQZs-Sg61A3ZkgHc";

const supabase = createClient(supabase_url, anon_key);

const button = document.getElementById('signup');



const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');



loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    async function signInWithPassword() {
        let { data, error } = await supabase.auth.signInWithPassword({
            email: emailInput.value,
            password: passwordInput.value,
          })

          console.log(data)
        }

        signInWithPassword()
        









    console.log('Form submitted');
    console.log('Email: ', emailInput.value);
    console.log('Password: ', passwordInput.value);


});