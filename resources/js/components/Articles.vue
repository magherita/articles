<template>
    <div>
        <h2>Articles</h2>

        <form @submit.prevent="saveArticle" class="mb-3">
            <div class="form-group">
                <input
                    v-model="article.title"
                    type="text"
                    class="form-control"
                    placeholder="Title"
                />
            </div>
            <div class="form-group">
                <textarea
                    v-model="article.body"
                    type="text"
                    class="form-control"
                    placeholder="Body"
                />
            </div>
            <button type="submit" class="btn btn-light btn-block">Save</button>
        </form>

        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li
                    v-bind:class="[{ disabled: !pagination.prevPage }]"
                    class="page-item"
                >
                    <a
                        class="page-link"
                        href="#"
                        @click="fetchArticles(pagination.prevPage)"
                        >Previous</a
                    >
                </li>

                <li class="page-item disabled">
                    <a class="page-link text-dark" href="#">
                        Page {{ pagination.currentPage }} of
                        {{ pagination.lastPage }}
                    </a>
                </li>

                <li
                    v-bind:class="[{ disabled: !pagination.nextPage }]"
                    class="page-item"
                >
                    <a
                        class="page-link"
                        href="#"
                        @click="fetchArticles(pagination.nextPage)"
                        >Next</a
                    >
                </li>
            </ul>
        </nav>

        <div
            class="card card-body mb-2"
            v-for="article in articles"
            v-bind:key="article.id"
        >
            <h3>{{ article.title }}</h3>
            <p>{{ article.body }}</p>

            <hr />

            <button @click="editArticle(article)" class="btn btn-warning mb-2">
                Edit
            </button>

            <button @click="deleteArticle(article.id)" class="btn btn-danger">
                Delete
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articles: [],
            article: {
                id: "",
                title: "",
                body: ""
            },
            article_id: "",
            pagination: {},
            edit: false
        };
    },

    created() {
        this.fetchArticles();
    },

    methods: {
        fetchArticles(page_url) {
            let vueModel = this;

            page_url = page_url || "api/articles";

            fetch(page_url)
                .then(res => res.json())
                .then(res => {
                    this.articles = res.data;
                    vueModel.makePagination(res.meta, res.links);
                })
                .catch(err => console.log(err));
        },
        makePagination(meta, links) {
            let pagination = {
                currentPage: meta.current_page,
                lastPage: meta.last_page,
                nextPage: links.next,
                prevPage: links.prev
            };

            this.pagination = pagination;
        },
        deleteArticle(id) {
            if (confirm("Are you sure?")) {
                fetch(`api/article/${id}`, {
                    method: "delete"
                })
                    .then(res => res.json())
                    .then(data => {
                        alert("Article removed");
                        this.fetchArticles();
                    })
                    .catch(err => console.log(err));
            }
        },
        editArticle(article) {
            this.edit = true;

            this.article.id = article.id;
            this.article.article_id = article.id;
            this.article.title = article.title;
            this.article.body = article.body;
        },
        saveArticle(article) {
            if (!this.edit) {
                // add
                fetch("api/article", {
                    method: "post",
                    body: JSON.stringify(this.article),
                    headers: {
                        "content-type": "application/json"
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        this.article.title = "";
                        this.article.body = "";

                        alert("Article added");

                        this.fetchArticles();
                    })
                    .catch(err => console.log(err));
            } else {
                // edit
                fetch("api/article", {
                    method: "put",
                    body: JSON.stringify(this.article),
                    headers: {
                        "content-type": "application/json"
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        this.article.title = "";
                        this.article.body = "";

                        alert("Article edited");

                        this.fetchArticles();
                    })
                    .catch(err => console.log(err));
            }
        }
    }
};
</script>
