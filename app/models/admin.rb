class Admin < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  # :registrable
  devise :database_authenticatable, :recoverable, :rememberable, :trackable, :validatable, :confirmable
end
