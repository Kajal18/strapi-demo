module.exports = async (ctx, next) => {
  if (ctx.state.user) {
    if (ctx.state.user.permissionRoles === 'owner') {
      ctx.query.userId = ctx.state.user.id
    } else {
      ctx.unauthorized('Invalid role!')
    }
  } else {
    ctx.unauthorized('Your are not logged in!')
  }
}