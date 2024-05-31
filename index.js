const Parse = require('parse/node');

Parse.initialize('kh2gsvtSljEKfoE1UqTArOkINeLINJ37ZgEf0OFk' ,'5wRCtRaX8uQ8Ux9iXzKsCdD2oiqoosywcW1X4fgk')
Parse.serverURL = 'https://parseapi.back4app.com/'


// class 1

// let Person = Parse.Object.extend('Person')          // used to create new Table or class 

// let person = new Person();                          // create new row we can say 

// person.set('name' , 'Alex carry')                   // add values in name and age column
// person.set('age' , 30)

// person.save()                                       // used to save data in database



// let Person = Parse.Object.extend('Person')        // generally used to create new table/class or we can say used to used to reterieve existing class/table

// let Person = Parse.Object.extend('Person' , {
//     isAdult : function(){
//        return this.get('age') > 18
//     },
//     initialize : function(attrs , options){
//         this.hasChildren = false
//     }
// },

// {
//     create : function(livingCity){
//         let person = new Person()
//         person.set('livingCity' , livingCity)
//         return person
//     }
// })


// let person2 = Person.create('vikram bhau')         // create a new person
// person2.set('name' , 'my second person')

// console.log(person2.get('livingCity'))
// console.log(person2.hasChildren)

// person2.save()


// class 2 


// async function run()
// {

//     let Person = Parse.Object.extend('Person')        
//     let query = new Parse.Query(Person)                // this part create new query object for database and query in parse used to reterieve data from database 
    
//     let personObject = await query.get('fMXB338CPr');
    
//     console.log(personObject.get('name'))
//     console.log(personObject.get('age'))
     
//     personObject.increment('age');

//     console.log(personObject.get('name'))
//     console.log(personObject.get('age'))


//     personObject.save()                          // save latest data in database if that data not present in parse db it create entry

//     personObject.fetch()                         // retrieve latest data from database 
// } 

// run();


// class 3

// setting unsetting array properties and distroying objects

// async function run()
// {
//     let Person = Parse.Object.extend('Person')        
//     let query = new Parse.Query(Person)
    
//     let personObject = await query.get('2P1FxfdgFu');
    
//     // personObject.add("skills" , "Driving")             // used to add values in array inside column values 
//     personObject.add("skills" , "swiming")

//     // personObject.addUnique("skills" , "coding")
//     // personObject.addUnique("skills" , "computing")         // even we call twice it add only one because of unique
   
//     // personObject.remove('skills' , 'computing')    // used to remove but add / addUnique and remove couldnot work parallely

//     // console.log(personObject.get('name'))
//     // console.log(personObject.get('age'))
//     // console.log(personObject.get('skills'))


//     // personObject.unset('name')           // name column me iski row me undefined  set ho jaayega

//     personObject.save()   

//     personObject.destroy();   
// } 

// run();





// async function run()
// {
//     let Person = Parse.Object.extend('Person');
//     // let query = new Parse.Query(Person);

//     for(let i = 1 ; i<10 ; i++)
//         {
//             const person = new Person();
//             person.set('name' , `babu${i}`)
//             person.set('age' , 22)
//             person.set('livingCity' , 'chennai')
//             person.add('skills' , `cycling day${i}`)   
            //    or
            //  persona.set("skills" , ["cycling day${i}"])   // that's also work same
//             person.save()
//         }

//     // console.log(personObject);

// }

// run()


// // class 4

// note : always apply condition before find() from database
// async function run()
// {
//     let Person = Parse.Object.extend('Person');
//     let query = new Parse.Query(Person);

//     // we can add as many filter as i can

//     // query.equalTo('name' , 'babu');
//     // query.equalTo('age' , 22)                 // now neeche waali cheeze isse filter hone ke baad chalegi

//     // query.notEqualTo('age' , 45);
//     // query.greaterThanOrEqualTo('distanceFromCompany' , 1000)
//     // query.notEqualTo('name' , 'babu1');
//     // query.lessThan();
//     // query.lessThanOrEqualTo();

//     let result = await query.find();

    

//     for(let i=0 ;i<result.length ; i++)
//     {
//         let thisObject = result[i];

//         console.log(thisObject.get('name'))
//         console.log(thisObject.get('age'))
//         console.log(thisObject.get('skills'))
//         console.log(" ");
//     }


// }

// run()



// class 5


// async function run()
// {
//     let Person = Parse.Object.extend('Person');
//     let query = new Parse.Query(Person);

//     // query.ascending("distanceFromCompany")            // always apply condition before find() from database
//     query.descending("distanceFromCompany") 
//     query.skip(3);                                        // 3 logo ko chod ke baaki ke 5 datta dikhaayega
//     query.limit(5);                                       // top 5 after applying condition
    
//     let result = await query.find();


//     for(let i=0 ;i<result.length ; i++)
//     {
//         let thisObject = result[i];

//         console.log(thisObject.get('name'))
//         console.log(thisObject.get('age'))
//         console.log(thisObject.get('skills'))
//         console.log(" ");
//     }


// }

// run()


// class 6




// async function run()
// {
//     let Person = Parse.Object.extend('Person');
//     let query = new Parse.Query(Person);


//     // query.containedIn('name' , ['babu1' , 'babu4' , 'Alex carry'])   // shows only these names

//     // query.notContainedIn('name' , ['babu1' , 'babu4' , 'Alex carry'])   // shows names expect this


//     // query.doesNotExist('livingCity');     // jinki living city undefined hai

//     // query.exists('livingCity');           // jinki living city undefined nhi hai

//     let result = await query.find();


//     for(let i=0 ;i<result.length ; i++)
//     {
//         let thisObject = result[i];

//         console.log(thisObject.get('name'))
//         console.log(thisObject.get('age'))
//         console.log(thisObject.get('skills'))
//         console.log(" ");
//     }


// }

// run()


// class 7

// one to one relation in database table 


// async function run()
// {
//     let Person = Parse.Object.extend('Person');    // reterieve person table
//     let person = new Person();                     // create new row / object

//     person.set('name' , 'Natalia');               // set values
//     person.set('age' , 43);
//     person.set('livingCity' , 'pune');
//     person.set('skills' , ['coding' , 'learning']);
//     person.set('distanceFromCompany' , 200);

//     let Address = Parse.Object.extend('Address');     // create new table Address

//     let address = new Address();                      // create new object

//     address.set('streetName' , 'Street A');
//     address.set('number' , 43151);
//     address.set('owner' , person);

//     address.save();                                  // save values

//     // Note : -> it create one row in tabel address and that table owner have created one button in which when click we see person natalia in person table
// }

// run()



// class 8

// one to many relation

// async function run()
// {
//     let Person = Parse.Object.extend('Person');    // reterieve person table
//     let person = new Person();                     // create new row / object

//     person.set('name' , 'zee');               // set values
//     person.set('age' , 21);
//     person.set('livingCity' , 'mumbai');
//     person.set('skills' , ['coding' , 'developing']);
//     person.set('distanceFromCompany' , 2400);
     
//     let Post = Parse.Object.extend('Post');
//     let postOne  = new Post();

//     postOne.set('title' , 'This is post one');
//     postOne.set('content' , 'content for post one');
//     postOne.set('owner' , person)


//     let postTwo = new Post();
//     postTwo.set('title' , 'This is postTwo');
//     postTwo.set('content' , 'content for postTwo');
//     postTwo.set('owner' , person)


//     postOne.save();
//     postTwo.save();
// }

// run()




// class 9
// many to many relations



// async function run()
// {
//     let Person = Parse.Object.extend('Person');    // reterieve person table
//     let queryPerson = new Parse.Query(Person);     // make a query for person

//     queryPerson.equalTo('name' , 'babu5');         // apply condition

//     let myPerson = await queryPerson.first();      // fetch first matching object

//     console.log("name :" , myPerson.get('name'));

 
//     let relation = myPerson.relation('likes')      // make relation

//     let Post = Parse.Object.extend('Post');

//     let postQuery = new Parse.Query(Post);


//     let result = await postQuery.find()

//     relation.add(result);
//     await myPerson.save();
   


//     // after exectue this code u see all persons object id one new column add name like and this because of 

// }

// run()





//  class 10

// async function run(){
   
//     // let user = new Parse.User();                 // this is generally used to create users

//     // user.set('username' , 'Chirag');
//     // user.set('password' , 'Chirag@2001');
//     // user.set('email' , 'chirag123@gmail.com');
    
//     // await user.save();


//     let user = await Parse.User.logIn("Chirag" , "Chirag@2001");

//     if (user){
//         console.log('user successfully logged In :' + user.get('email'));
//     }

// }

// run()


// class 11


// async function run(){

//     let user = await Parse.User.logIn("Chirag" , "Chirag@2001");

//     if (user){
       
//         let Note = Parse.Object.extend('Note');
//     //     let publicNote = new Note();
//     //     let privateNote = new Note();

//     //     publicNote.set('content' , "This is public note for user only");
//     //     privateNote.set('content' , 'This is private note for Alex only');

//     //     // I want to make private not specific for chirag so we use ACL -> Account control list


//     //     privateNote.setACL(new Parse.ACL(user));             // threw this only chirag have authority to read and write 
//     //                                                          // for public notes anyone can read and wright
//     //    await publicNote.save();
//     //    await privateNote.save();

     

//     // let noteQuery = new Parse.Query(Note);

//     // let result = await noteQuery.find();

//     // for (let i=0 ; i<result.length ; i++)
//     // {
//     //     console.log("content", result[i].get('content'))     // we can see "public notes" only because for seeing private notes we have to pass paramter over here
//     // }


//     // let noteQuery = new Parse.Query(Note);

//     // let result = await noteQuery.find({sessionToken : user.get('sessionToken')});

//     // for (let i=0 ; i<result.length ; i++)
//     // {
//     //     console.log("content", result[i].get('content'))     //  for seeing private notes we have to pass paramter over here
//     // }

     

//     // let's say i want to create for only writing or only reading then se

//       let privateNote = new Note();
//       privateNote.set('content' , 'This is the private note for chirag only, with read only access');


//       let myACL = new Parse.ACL()                // to initialize for ACL
//       myACL.setReadAccess(user , true);
//       myACL.setWriteAccess(user , false);

//       privateNote.setACL(myACL);
//       await privateNote.save();

//     }

// }

// run()


// class 12


// async function run(){

//     let user = await Parse.User.logIn("Chirag" , "Chirag@2001");

//     if (user){
          
//         // let myACL = new Parse.ACL()
//         // myACL.setPublicReadAccess(true);
//         // myACL.setPublicReadAccess(true);
        
        
//         // let myRole = new Parse.Role('PublicReadWrite' , myACL)

//         // myRole.save();
        

//         let rolesQuery = new Parse.Query(Parse.Role)
//         rolesQuery.equalTo('name' , 'PublicReadWrite')
        

//         let role = await rolesQuery.first()

//         if(role)
//         {
//             role.getUsers().add(user)
//         }

         

//     }

// }

// run()



// class 13


// async function run() {

//     let user = await Parse.User.logIn("Chirag" , "Chirag@2001");

//     if(user)
//     {
//         let Note = Parse.Object.extend('Note');
//         let noteQuery = new Parse.Query(Note);

//         let result = await noteQuery.find({sessionToken : user.get('sessionToken')});

//         Parse.User.enableUnsafeCurrentUser();

//         for (let i = 0 ; i < result.length ; i++)
//         {
//            console.log('Content :' + result[i].get('content'))
//         }

//         // user = Parse.User.logOut();
        
//         // console.log("User logged out")

//         // result = await noteQuery.find()
        
//         // for(let i = 0 ; i < result.length ; i++)
//         // {
//         //     console.log('Content:' + result[i].get('content'));
//         // }



//        await Parse.User.requestPasswordReset('chiragagrawal61230@gmail.com');            // Threw this email sent with instructions to reset the password
        

//     }
// }

// run();




// class 14


// querring arrray and strings 


// async function run() {

//     let Person = Parse.Object.extend('Person')

//     let personQuery = new Parse.Query(Person);

//     // personQuery.equalTo('skills' , 'swiming');

//     // personQuery.containsAll('skills' , [ "coding" ,"developing" ]);            // check all the containts
    
//     // personQuery.startsWith('name' , 'ba')

//     // personQuery.endsWith('name' , 'a')


//     personQuery.contains('name' , 'bu')       // if contain anything   


//     let result = await personQuery.find();
    
//     for(let i=0 ; i<result.length ; i++)
//     {
//         let thisObject = result[i];

//         console.log(thisObject.get('name'))
//     }
// }

// run();



// class 15

// reterieve data from related object 


// async function run() {

//     let Person = Parse.Object.extend('Person');
    
    
// }