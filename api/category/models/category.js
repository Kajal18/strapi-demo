'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#life-cycle-callbacks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    // Before saving a value.
    // Fired before an `insert` or `update` query.
    beforeSave: async (data) => {
      console.log('beforeSave: ', data);
    },

    // After saving a value.
    // Fired after an `insert` or `update` query.
    // afterSave: async (model, result) => {
    //   console.log('afterSave: ');
    // },


    //  Before fetching all values.
    //  Fired before a `fetchAll` operation.
    // beforeFetchAll: async (model) => {
    //   console.log('beforeFetchAll: ');

    // },

    //  After fetching all values.
    //  Fired after a `fetchAll` operation.
    // afterFetchAll: async (model, results) => {
    //   console.log('afterFetchAll: ');
    // },


    //  Fired before a `fetch` operation.
    // beforeFetch: async (model) => {
    //   console.log('beforeFetch: ');

    // },

    //  After fetching a value.
    //  Fired after a `fetch` operation.
    // afterFetch: async (model, result) => {
    //   console.log('afterFetch: ');
    // },

    //  Before creating a value.
    //  Fired before an `insert` query.
    beforeCreate: async (data) => {
      console.log('beforeCreate: ', data.name);
      data.name = data.name.toUpperCase()
      console.log('AfterCreate: ', data.name);
    },

    //  After creating a value.
    //  Fired after an `insert` query.
    // afterCreate: async (model, result) => {
    //   console.log('afterCreate: ');
    // },

    //  Before updating a value.
    //  Fired before an `update` query.
    // beforeUpdate: async (model) => {
    //   console.log('beforeUpdate: ');
    // },

    //  After updating a value.
    //  Fired after an `update` query.
    // afterUpdate: async (model, result) => {
    //   console.log('afterUpdate: ');
    // },

    //  Before destroying a value.
    //  Fired before a `delete` query.
    // beforeDestroy: async (model) => {
    //   console.log('beforeDestroy: ');
    // },

    //  After destroying a value.
    //  Fired after a `delete` query.
    // afterDestroy: async (model, result) => {
    //   console.log('afterDestroy: ');
    // }
  }
};
