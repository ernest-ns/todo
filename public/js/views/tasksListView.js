var TasksListView = Backbone.View.extend({
    tagName : "section",

    initialize : function() {
        _.bindAll(this, 'render', 'addNewTask' );
        // fixes loss of context for 'this' within methods
        this.template = _.template($("#tasks-list-view-template").html());

        this.render();
        // not all views are self-rendering. This one is.

    },
    events: {
        'click input.add-new-task-button': 'addNewTask'
    },

    render : function() {
        $('body').append(this.el);
        this.$el.html(this.template);
        this.appendAllTasks();
        tasks.reset();
        tasks.fetch({add: true});
    },
    addNewTask : function () {
        var taskDescription = this.$el.find('(.new-task-text').val();
        newTask = tasks.create({description : taskDescription,wait: true});
        console.log(newTask);
    },
    appendAllTasks : function(){
        var list = $('.tasks-list-view');
        console.log(list);
        tasks.on("add", function(task) {
            taskTemplate = _.template($("#tasks-view-template").html (), {taskDescription : task.get('description')});
            list.append(taskTemplate);
        });
    }
});
