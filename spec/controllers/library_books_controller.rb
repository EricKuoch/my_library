require 'rails_helper'

RSpec.describe LibraryBooksController, type: :controller do
  let!(:user) { create(:user, email:"jonjones@gmail.com") }
  let(:valid_attributes) do
    {
      'author' => 'Dimitrious J',
      'title' => 'test',
      'description' => 'lorem ipsum toto et test',
      'user_id' => user.id,
    }
  end
  let(:invalid_attributes) do
    {
      'author' => 'Dimitrious J',
      'title' => 'test',
      'description' => 'lorem ipsum toto et test',
      'user_id' => 'nil',
    }
  end

  describe "/create" do
    context 'when it created with valid attributes' do 
      it 'add a new library book' do
        allow_any_instance_of(LibraryBooksController).to receive(:library_books_params).and_return(valid_attributes)
        expect do
          post :create, params: { library_book: valid_attributes }
        end.to change(LibraryBook, :count).by(1)
      end

      it 'redirect to books index' do
        allow_any_instance_of(LibraryBooksController).to receive(:library_books_params).and_return(valid_attributes)
        expect do
          post :create, params: { library_book: valid_attributes }
          expect(response).to redirect_to(books_path)
          expect(response).to be_successful
        end
      end

      it 'to be successful' do
        allow_any_instance_of(LibraryBooksController).to receive(:library_books_params).and_return(valid_attributes)
        expect do
          post :create, params: { library_book: valid_attributes }
          expect(response).to be_successful
        end
      end
    end

    context 'with invalid attributes' do 
      it 'does not add a new library book' do
        allow_any_instance_of(LibraryBooksController).to receive(:library_books_params).and_return(invalid_attributes)
        expect do
          post :create, params: { library_book: invalid_attributes }
        end.to change(LibraryBook, :count).by(0)
      end
    end
  end
end