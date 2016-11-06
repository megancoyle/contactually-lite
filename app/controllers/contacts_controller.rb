class ContactsController < ApplicationController
  def new
    # @contact = Contact.new
  end

  def load
    file = contact_params[:file]
    # parse tsv file
    rows = CSV.read(file.path, { :col_sep => "\t" })
    # convert headers
    headers = rows.shift.map { | header| header.gsub!(/( )/, '_').downcase! }

    contacts = rows.map { |row| Hash[headers.zip(row)] }

    Contact.create(contacts);

    redirect_to "/contacts"
  end

  def index
    @contacts = Contact.all
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
