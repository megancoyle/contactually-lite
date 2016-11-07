require 'rails_helper'

describe ContactsController, type: :controller do

  context '#index' do
     it 'returns all the contacts' do
       Contact.create(
         first_name: "John",
         last_name: "Smith",
         email_address: "john-smith@gmail.com",
         phone_number: "202-111-2222",
         company_name: "Smith and Co"
       )

       get :index

       expect(response).to render_template(:index)
     end
   end

end
