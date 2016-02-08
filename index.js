module.exports = {
    /**
     * The main entry point for the Dexter module
     *
     * @param {AppStep} step Accessor for the configuration for the step using this module.  Use step.input('{key}') to retrieve input data.
     * @param {AppData} dexter Container for all data used in this workflow.
     */
    run: function(step, dexter) {
        var min = step.input('min').first();
        var max = step.input('max').first();

        // Set defaults if none present
        if (min == undefined) {
          min = 0
        }
        if (max == undefined) {
          max = 1000
        }

        // Enforce integer type
        min = parseInt(min);
        max = parseInt(max);

        // Ensure we have a correct range
        if (min >= max) {
          return this.fail({'message': 'Minimum number must be greater than maximum number.'});
        }

        // Generate number and return
        var num = Math.floor(Math.random() * (max - min)) + min;
        self.complete({number: num});
    }
};
