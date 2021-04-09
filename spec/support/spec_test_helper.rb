module SpecTestHelper

  def current_user
    User.find(request.session[:user])
  end
end