
console.log('dddddddddddd');
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';



const supabase_url = 'https://todxjbqzlxjjdiccyzuu.supabase.co';
const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvZHhqYnF6bHhqamRpY2N5enV1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDU0ODAzNSwiZXhwIjoyMDE2MTI0MDM1fQ.wMICmET89dT5ez4Tz-5aDuQkpG0_6gDXjSu57LLldHg";


const supabase = createClient(supabase_url, anon_key);


const { data, error } = await supabase.auth.getSession()


let id_user = data["session"]["user"]["id"];

try {
    let { data: orders, error } = await supabase
    .from('current_orders')
    .select('item,cost, address, name, user_id') 
    .eq('checkedout', true)

    console.log(orders)


    // bear_profile.js

const bearData = orders

// // Function to add a row to the bearOrders table
// function addRowToBearOrdersTable() {
//     const bearOrdersTableBody = document.querySelector('#bearOrders tbody');

//     const newRow = document.createElement('tr');
//     newRow.innerHTML = `
//         <td>${bearData.item}</td>
//         <td>${bearData.cost}</td>
//         <td>Current Time</td>
//         <td>
//             <input type="text" name="person" value="1">
//             <button>Add</button>
//         </td>
//     `;

//     bearOrdersTableBody.appendChild(newRow);
// }

// Function to add a row to the allOrders table
for (let i = 0; i < bearData.length; i++) {

function addRowToAllOrdersTable() {
    const allOrdersTableBody = document.querySelector('#allOrders tbody');

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${bearData[i].name}</td>
        <td>${bearData[i].item}</td>
        <td>${bearData[i].cost}</td>
        <td>
            <input type="checkbox" name="userid" value="${bearData[i].user_id}">
        </td>
    `;

    allOrdersTableBody.appendChild(newRow);
}

// Call the functions to add rows when the page loads

    addRowToAllOrdersTable();
}

    document.getElementById('adder').addEventListener('click', function() {
        const checkboxes = document.querySelectorAll('input[name="userid"]:checked');
        const values = Array.from(checkboxes).map(checkbox => checkbox.value);
        console.log(values);
    

        for (let i = 0; i < values.length; i++) {
            async function inserter(){
            
                const { data, error } = await supabase
                .from('current_orders')
                .update({ bearer_id: id_user })
                .eq('user_id', values[i])
                .select()
                
    
        }

        inserter()
    }
       
    });


    
} catch (error) {
    
}




