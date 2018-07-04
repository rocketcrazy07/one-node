# one-node
One node app to rule them all.  A node app built to deploy, run, and manage other node apps and help make node cms apps like [ApostropheCMS](https://apostrophecms.org/) more popular and easier to manage.  The overall idea is to make a cpanel like app for node. This is in the very early stages so feel free to leave suggestions or ideas/requests for features.

## Dev
Globally needed npm libraries are nodemon, ts-node, and typescript
````
npm install -g nodemon ts-node typescript
````
To start dev server and watch for typescript file changes use:
````
npm run watch-server
````

## Routes and Controllers
Routes are defined within a controller using decorators. For instance to make a a route for a Get request to /users you would do the following

````
import {GET} from 'src/lib/routes-decorator'
class foo{
    @GET('/users')
    static async bar(ctx){
        //route function
    }
}
```` 
You can also define a prefix for that controller by setting the prefix property of the class.
````
import {GET} from 'src/lib/routes-decorator'
static prefix='/users';
class foo{
    @GET('/:id')
    static async bar(ctx){
        //route function
    }
}
```` 
This would be the equivalent to:

````
import {GET} from 'src/lib/routes-decorator'

class foo{
    @GET('/users/:id')
    static async bar(ctx){
        //route function
    }
}
````

You can use the same syntax for a Put request by replacing @GET with @PUT.  Currently these are the only two methods but if you look at src/lib/routes-decorator it is easy to implement another. This also gives a central location for route middelware.