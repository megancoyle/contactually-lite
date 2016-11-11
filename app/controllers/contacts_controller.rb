class ContactsController < ApplicationController

  def index
    @contacts = Contact.all
  end

  def load
    file = upload_params[:file]
    # parse tsv file
    rows = CSV.read(file.path, { :col_sep => "\t" })
    # convert headers
    headers = rows.shift.map { | header| header.gsub!(/( )/, '_').downcase! }

    contacts = rows.map { |row| Hash[headers.zip(row)] }

    Contact.create(contacts);

    redirect_to contacts_path
  end

  def new
    @contact = Contact.new
  end

  def destroy
    contact = Contact.find(params[:id])
    contact.destroy
    render json: contact
  end

  private
    def upload_params
      params.permit(:file)
    end
end
