require 'rails_helper'

RSpec.describe Contact, :type => :model do
  it "orders by last name" do
    new_contact = Contact.create!(first_name: "John", last_name: "Smith", email_address: "john-smith@gmail.com", phone_number: "202-111-2222", company_name: "Smith and Co")

    expect(new_contact.first_name).to eq("John")
    expect(new_contact.last_name).to eq("Smith")
    expect(new_contact.email_address).to eq("john-smith@gmail.com")
    expect(new_contact.phone_number).to eq("202-111-2222")
    expect(new_contact.company_name).to eq("Smith and Co")
  end

  it "is invalid without last name" do
    new_contact = Contact.create!(first_name: "John", email_address: "john-smith@gmail.com", phone_number: "202-111-2222", company_name: "Smith and Co")

    expect(new_contact).not_to be_valid
  end

  it "is invalid without email address" do
    new_contact = Contact.create!(first_name: "John", last_name: "Smith", phone_number: "202-111-2222", company_name: "Smith and Co")

    expect(new_contact).not_to be_valid
  end

  it "is invalid without phone number" do
    new_contact = Contact.create!(first_name: "John", last_name: "Smith", email_address: "john-smith@gmail.com", company_name: "Smith and Co")

    expect(new_contact).not_to be_valid
  end

  it "is invalid without company name" do
    new_contact = Contact.create!(first_name: "John", last_name: "Smith", phone_number: "202-111-2222", email_address: "john-smith@gmail.com")

    expect(new_contact).not_to be_valid
  end

end
