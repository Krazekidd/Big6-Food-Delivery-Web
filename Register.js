 
 import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';



 const supabase_url = 'https://todxjbqzlxjjdiccyzuu.supabase.co';
 const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvZHhqYnF6bHhqamRpY2N5enV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1NDgwMzUsImV4cCI6MjAxNjEyNDAzNX0.PyducfY0_Qo3vvOZHJ7CMllHMbymQZs-Sg61A3ZkgHc";
 



 const supabase = createClient(supabase_url, anon_key);


 

 
 const signupForm = document.getElementById('signupForm');
 const userInput1 = document.getElementById('userInnput1');
 const userInput2 = document.getElementById('userInnput2');
 const userInput3 = document.getElementById('userInnput3');
 const userInput4 = document.getElementById('userInnput4');
 const userInput5 = document.getElementById('userInnput5');
 const userInput6 = document.getElementById('userInnput6');
 const userInput7 = document.getElementById('userInnput7');
 const userInput8 = document.getElementById('userInnput8');
 const userInput9 = document.getElementById('userInnput9');

 signupForm.addEventListener('click', function(event) {
     event.preventDefault(); 





     async function signInWithPassword() {
        // const { data, error } = await supabase.auth.signInWithPassword({
        //   email: userInput4.value,
        //   password: userInput8.value,
        // })
        const { data, error } = await supabase.auth.getSession()
        let userid = data["session"]["user"]["id"];

        try {
        const { data, error } = await supabase
          .from('customer')
          .insert([
            { first_name: userInput1.value, middle_name: userInput2.value, last_name: userInput3.value, phone:userInput9.value, email: userInput4.value, user_id: userid, phone_home:  userInput5.value,
                phone_work:userInput6.value},
          ])
          .select()
      
        } catch (error) {
          console.log(error);
          
        }
      
      }


      signInWithPassword()


      window.location.href = "/";



    //  console.log('Form submitted');
    //  console.log('First Name: ', userInput1.value);
    //  console.log('Middle Name: ', userInput2.value);
    //  console.log('Last Name: ', userInput3.value);
    //  console.log('Email: ', userInput4.value);
    //  console.log('Mobile Phone: ', userInput9.value);
    //  console.log('Home Phone: ', userInput5.value);
    //  console.log('Work Phone: ', userInput6.value);
    //  console.log('Password: ', userInput7.value);
    //  console.log('Re-entered Password: ', userInput8.value);
 });