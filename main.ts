import inquirer from 'inquirer'

let todos:string[]=["Circket", "Football"]
 async function working (todos:string[]){
   do {
      let todo = await inquirer.prompt(
         {
            type:"list",
            name:"select",
            message:"Select anyone of these",
            choices:["Add","Update","View","Delete"]
         }
       )
       if(todo.select=="Add"){
         let add =await inquirer.prompt(
            {
              type:"input",
              name:"addtodo",
              message:"what do you want to add in todo",
            }
           )
           todos.push(add.addtodo)
           console.log(todos.join(" , "));   
         }

       if(todo.select=="Update"){
        let updatetodo = await inquirer.prompt(
         {
           type:"list",
           message:"select item for update",
           name:"updatenew",
           choices:todos.map(item => item)
        })
        let addupdate= await inquirer.prompt(
         {
            type:"input",
            name:"addupdate",
            message:"what do you add ",
         }
        ) 
        let newtodo = todos.filter(val =>val !==updatetodo.updatenew)
         todos=[...newtodo, addupdate.addupdate]
         console.log(todos);
       }

       if(todo.select=="View"){
        console.log(todos);
        
       }

      if(todo.select=="Delete"){
         let del = await inquirer.prompt(
            {
               type:"list",
               message:"select item for update",
               name:"updatenew",
               choices:todos.map(item => item)
            }
         )
         let newtodos = todos.filter(val =>val !==del.updatenew)
         todos=[...newtodos]
         console.log(todos);  
      }
   }
   while(true)
      
}
working(todos) 
