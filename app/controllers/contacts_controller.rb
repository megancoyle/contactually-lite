class ContactsController < ApplicationController
  def new
    # @contact = Contact.new
  end

  def load
    file = contact_params[:file]
    contacts = CSV.read(file.path, { :col_sep => "\t" })

    contacts.each do |contact|
      puts contact
    end

    redirect_to "/"
  end

  def show

  end
  # def create
  #   @contact.Contact.new(contact_params)
  #
  #   if @contact.save
  #     redirect_to @contact
  #   else
  #     render'new'
  #   end
  # end
  #
  private
    def contact_params
      params.permit(:file)
    end
end
