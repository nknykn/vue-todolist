const app = new Vue({
  el: '#app',
  data() {
    return {
      inputText: '',
      searchText: '',
      isShowDoneTodos: false,
      lists: [
        {
          name: 'ネギを買う',
          isDone: false
        }
      ]
    };
  },
  computed: {
    filterToDosBySearchText () {
      return this.lists.filter((todo) => {
        return todo.name.indexOf(this.searchText) !== -1;
      });
    },
    isNotDoneToDos () {
      return this.lists.filter((todo) => {
        return !todo.isDone;
      });
    },
    isDoneToDos () {
      return this.lists.filter((todo) => {
        return todo.isDone;
      });
    }
  },
  methods: {
    onAdd () {
      if (this.inputText) {
        this.lists.push({
          name: this.inputText,
          isDone: false,
        });
        this.inputText = '';
      }
    },
    onDelete (index) {
      this.lists.splice(index, 1);
    }
  }
});