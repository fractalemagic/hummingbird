HB.ApplicationController = Ember.Controller.extend(HB.HasCurrentUser, {
  needs: ['header'],

  routeChanged: function () {
    // Track the last visited URL for redirection on sign in.
    if (!window.location.href.match('/sign-in')) {
      window.lastVisitedURL = window.location.href;
    }

    // Track page view
    window.analytics.page();
  }.observes('currentPath'),

  // Close the quick update panel on page transition.
  closeQuickUpdate: function() {
    this.set('controllers.header.showUpdater', false);
  }.observes('currentPath'),

  actions: {
    signOut: function () {
      HB.Session.signOut();
    }
  }
});
