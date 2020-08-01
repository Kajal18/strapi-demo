module.exports = async (ctx, next) => {
  const user = ctx.state.user;
  if (!user) {
    return ctx.badRequest(null, [{ messages: [{ id: 'No authorization header was found' }] }]);
  }

  const data = await strapi.services.snippet.fetch({ user: user.id });

  if (!data) {
    return ctx.notFound();
  }

  ctx.req._parsedUrl.query = { user: ctx.state.user.id }
  ctx.send(data);
  // if (targetUser === loggedInUser) {
  //   return await next()
  // }
  // else {
  //   return ctx.unauthorized('Tagrte user is different from loggedin user')
  // }
}