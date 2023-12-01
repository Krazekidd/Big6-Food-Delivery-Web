
console.log('dddddddddddd');
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';



const supabase_url = 'https://todxjbqzlxjjdiccyzuu.supabase.co';
const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvZHhqYnF6bHhqamRpY2N5enV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1NDgwMzUsImV4cCI6MjAxNjEyNDAzNX0.PyducfY0_Qo3vvOZHJ7CMllHMbymQZs-Sg61A3ZkgHc";


const supabase = createClient(supabase_url, anon_key);


const { data, error } = await supabase.auth.getSession()

let id_user = data["session"]["user"]["id"];

try {
    let { data: orders, error } = await supabase
    .from('current_orders')
    .select('item,cost') 

    let total = 0
    console.log(orders[0].item);

    for (let i = 0; i < orders.length; i++) {
      total +=  parseInt(orders[i].cost.replace(/[^0-9]/g, ''), 10);
    }

    
    // JSON data
    const jsonData = orders;
    for (let i = 0; i < orders.length; i++) {
      // Function to add rows to the table
      function addRowToTable(orders) {
        const productTable = document.getElementById("productTable");

        // Create a new row
        const newRow = document.createElement("div");
        newRow.classList.add("row");

        // Populate the row with data
        newRow.innerHTML = `
            <div class="col-4">
                ${orders[i].item}
            </div>
            <div class="col-2">
                ${orders[i].cost}
            </div>
  
            <div class="col-2">
                ${total}
            </div>
            <div class="col-1">
                <a href="#" class="text-danger"><span style="color: rgb(255, 255, 255);">remove </span></a>
            </div>
        `;

        // Append the new row to the table
        productTable.appendChild(newRow);
    }

    // Call the function with the JSON data
    addRowToTable(jsonData);
    }




    document.getElementById('CHECKOUT').addEventListener('click', function() {
        async function inserter(){
            const { data, error } = await supabase
                .from('current_orders')
                .update({ checkedout: true})
                .eq('user_id', id_user)
                .select()
            }

            inserter()


            window.location.href = 'payment.html';
    });


 
 
  } catch (error) {
    
  }

        