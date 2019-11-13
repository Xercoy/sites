Vue.component(`posts-element`, {
    props: ['post'],
    template: `
    <div class="col-md-6 text-center post justify-content-center">
        <h2 class="header">[<a :href="post.link">{{post.title}}</a>]</h2>
        <b><i><p class="accolade">{{post.accolade}}</p></i></b>
        <div class=""><p class="">{{post.date}}</p></div>
        <p class="description">{{post.description}}</p> 
    </div>
    `
});

/*
Vue.component(`posts-element`, {
    props: ['post'],
    template: `
    <div class="offset-md-4 col-md-5 mx-auto post">
        <h2 class="header">[<a :href="post.link">{{post.title}}</a>]</h2>
        <b><i><p class="accolade">{{post.accolade}}
        <div class=""><p class="">{{post.date}}</p></div><p></b><i>
        <p class="description">{{post.description}}</p> 
    </div>
    `
});
*/