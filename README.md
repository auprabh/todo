# todo

*todo* is a simple To-Do App being developed for one hypothetical user named Mr. Bean to assist him with managing his todo's. This app would provide following features:

- SignIn & SignOut of the App.
- Create, Read, Update & Delete todo items.
- Prioritise todo items.
- Assign Completion date to todo items.
- View todo-items list by latest date first.

### Version
0.0.9

### Demo
The App is available for **demo** on [Redhat Openshift PaaS](http://todo-digixuberance.rhcloud.com/)
Username: bean
Password: misterbean

### Tech

*todo* uses a following open source frameworks & libraries:

* AngularJS for front-end.
* Google Polymer Page Elements for User Experience & UI components. Angular-Material Directives have been used for this.
* NodeJS, evented I/O for the backend.
* ExpressJS, fast node.js network app framework.
* localStorage (ngStorage) for local data persistence.

And of course *todo* itself is open source with a [public repository](https://github.com/auprabh/todo) on GitHub.

### Installation

You need git, npm, node installed globally for setup

```sh
$ git clone [git-repo-url] todo
$ cd todo
$ npm install
$ node server.js
```

Open [http://127.0.0.1:8080/](http://127.0.0.1:8080/) in browser to view the App.
Username: bean
Password: misterbean

### Todos

- ~~SignIn & SignOut of the App.~~
- ~~Create, Read,~~ Update ~~& Delete~~ todo items
- ~~Prioritise todo items.~~
- ~~Assign Completion date to todo items.~~
- ~~View todo-items list by latest date first.~~

### Known issues
- Update attempted, but not available. Equivalent functionality available in Categories.
- When a new task is added, it automatically does not get sorted.

License
----

MIT
