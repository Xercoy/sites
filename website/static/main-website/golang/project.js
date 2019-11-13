
Vue.component(`project-element`, {
  props: ['project'],
  template: `
    <div class="col-md-6 justify-content-center project-margin">
        <div class="text-center">
            <img width=100 height=100 class="float-left" :src="project.image"></img>
        </div>

        <div class="text-center">
          <h2>[<a :href="project.link">{{project.name}}</a>]</h2> 
          <p><a :href="project.github">Source on Github</a></p>
          <p>{{project.description}}</p>
          <p><b>Pizazz: {{project.pizazz}} </b></p>
        </div>
    </div>`
});

/*
Vue.component(`project-element`, {
  props: ['project'],
  template: `
    <div class="col-md-6 justify-content-center">
        <div class="text-center">
            <img width=100 height=100 class="float-left" :src="project.image"></img>
        </div>

        <div class="text-center">
          <h2>[<a :href="project.link">{{project.name}}</a>]</h2> 
          <p>{{project.description}}</p>
        </div>
    </div>`
});
*/

/*
Vue.component(`project-element`, {
  props: ['project'],
  template: `
    <div class="col-md-6 justify-content-center">
        <div class="offset-3 text-center">
            <img width=100 height=100 class="float-left" :src="project.image"></img>
        </div>

        <div class="text-center">
          <h2>[<a :href="project.link">{{project.name}}</a>]</h2> 
          <p>{{project.description}}</p>
        </div>
    </div>`
});
*/