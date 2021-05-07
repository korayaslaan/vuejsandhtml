<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün İşlemleri</h3>
          <hr />
          <div class="form-group">
            <label>Ürün Adı</label>
            <input
              class="form-control"
              type="text"
              placeholder="Takım Arkadaşınızın İsimini Giriniz"
            />
          </div>
          <div class="form-group">
            <label>Adet</label>
            <input
              class="form-control"
              type="text"
              placeholder="Takım Arkadaşınızın İsimini Giriniz"
            />
          </div>
          <div class="form-group">
            <label>Fiyat</label>
            <input
              class="form-control"
              type="text"
              placeholder="Takım Arkadaşınızın İsimini Giriniz"
            />
          </div>
          <div class="form-group">
            <label>Açıklama</label>
            <textarea
              cols="30"
              rows="5"
              placeholder="Ürüne ait bir açıklama giriniz..."
              class="form-control"
            ></textarea>
          </div>
          <button class="btn btn-primary">Kaydet</button>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="tile">
              <div class="tile-body">
                <table
                  class="table table-hover table-bordered"
                  id="sampleTable"
                >
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Ürün Adı</th>
                      <th>İçerik</th>
                      <th>Ürün Başlığı</th>
                      <th>Kategori Id</th>
                      <th>Tarih</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

