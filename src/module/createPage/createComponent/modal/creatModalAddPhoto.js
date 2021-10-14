/* eslint-disable strict */
'use strict';

function creatModalAddPhoto() {
  const div = document.createElement('div');
  div.classList.add('modal-content');
  div.innerHTML = `
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Avatar picture</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex ">
        <form class='form-add-photo' name='photo'>
          <div class="massager mb-2"></div>
          <div class="mt-2">
            <div class="file">
              <input name="image" type="file" class="form-control file__input" accept='.jpg, .png, .gif'
                id="formImage" placeholder="Photo">
              <div class="file__button">Выбрать</div>
              <div class="position-relative file__preview" id="formPreview"> </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-outline-primary" id='saveChanges'>Save photo</button>
          </div>
        </form>
      </div>
      `;
  return div;
}

export default creatModalAddPhoto;

