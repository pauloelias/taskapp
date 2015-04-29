var TaskList = React.createClass({

  remove: function(i) {
    this.props.remove(i);
  },

  render: function() {
    // var displayTask = function(task) {
    //   return <li>{task}</li>
    // };

    // ECMAScript 6
    var displayTask = (task, i) => <li onClick={this.remove.bind(this, i)}>{task}</li>;

    return (
      <ul>
        { this.props.items.map(displayTask) }
      </ul>
    );
  }

});