var TaskApp = React.createClass({
  getInitialState: function() {
    return {
      items: [],
      task: ''
    };
  },

  onChange: function(e) {
    // this.setState({ task: e.target.value });

    // ECMAScript 6
    var task = e.target.value;

    this.setState({ task });
  },

  addTask: function(e) {
    // this.setState({
    //   items: this.state.items.concat([this.state.task]),
    //   task: ''
    // });

    // ECMAScript 6
    var items = this.state.items.concat([this.state.task]);
    var task = '';

    this.setState({ items, task });

    e.preventDefault();
  },

  removeTask: function(index) {
    var items = this.state.items;
    delete items[index];

    this.setState({ items });
  },

  render: function() {
    return (
      <div>
        <h1>My Tasks</h1>
        <TaskList items={this.state.items} remove={this.removeTask} />

        <form onSubmit={this.addTask}>
          <input onChange={this.onChange} value={this.state.task} />
          <button>Add Task</button>
        </form>
      </div>
    );
  }

});

React.render(<TaskApp />, document.body);