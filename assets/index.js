
      //Data Bahan
      var data = [
        {"id": 1, "kode_bahan": "BHN001", "nama_bahan": "Selada", "stock_bahan": 50},
        {"id": 2, "kode_bahan": "BHN002", "nama_bahan": "Seledri", "stock_bahan": 30},
        {"id": 3, "kode_bahan": "BHN003", "nama_bahan": "Roti", "stock_bahan": 100},
        {"id": 4, "kode_bahan": "BHN004", "nama_bahan": "Daging Ayam", "stock_bahan": 80},
        {"id": 5, "kode_bahan": "BHN005", "nama_bahan": "Tomat", "stock_bahan": 70},
        {"id": 6, "kode_bahan": "BHN006", "nama_bahan": "Kentang", "stock_bahan": 90},
        {"id": 7, "kode_bahan": "BHN007", "nama_bahan": "Bawang Putih", "stock_bahan": 40},
        {"id": 8, "kode_bahan": "BHN008", "nama_bahan": "Lada Hitam", "stock_bahan": 25},
        {"id": 9, "kode_bahan": "BHN009", "nama_bahan": "Tahu", "stock_bahan": 60},
        {"id": 10, "kode_bahan": "BHN010", "nama_bahan": "Tempe", "stock_bahan": 55},
        {"id": 11, "kode_bahan": "BHN011", "nama_bahan": "Kacang Hijau", "stock_bahan": 35},
        {"id": 12, "kode_bahan": "BHN012", "nama_bahan": "Wortel", "stock_bahan": 75},
        {"id": 13, "kode_bahan": "BHN013", "nama_bahan": "Telur", "stock_bahan": 65},
        {"id": 14, "kode_bahan": "BHN014", "nama_bahan": "Susu", "stock_bahan": 45},
        {"id": 15, "kode_bahan": "BHN015", "nama_bahan": "Gula", "stock_bahan": 85},
        {"id": 16, "kode_bahan": "BHN016", "nama_bahan": "Garam", "stock_bahan": 20},
        {"id": 17, "kode_bahan": "BHN017", "nama_bahan": "Minyak Sayur", "stock_bahan": 55},
        {"id": 18, "kode_bahan": "BHN018", "nama_bahan": "Sambal", "stock_bahan": 30},
        {"id": 19, "kode_bahan": "BHN019", "nama_bahan": "Bawang Merah", "stock_bahan": 40},
        {"id": 20, "kode_bahan": "BHN020", "nama_bahan": "Sereh", "stock_bahan": 15},
];

      //Dom modal Bahan
      $(document).ready(function () {
          $('#bahanButton').click(function() {
              var valueKodeProduct = $('#valueKodeProduct').val();

              if (!valueKodeProduct) {
                  Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Silakan pilih produk terlebih dahulu!'
                  });
              } else {
                  $('#bahanModal').modal('show');
              }
          });

          var table = $('#bahanTable').DataTable({
              responsive: true,
              width: '100%',
              data: data,
              columns: [
                  {
                      data: null,
                      render: function (data, type, row, meta) {
                          return meta.row + 1;
                      }
                  },
                  { data: 'kode_bahan'},
                  { data: 'nama_bahan' },
                  { data: 'stock_bahan' },
                  {
                      data: null,
                      className: 'text-center',
                      render: function (data, type, row) {
                          return '<button class="btn btn-primary check-bahan"><i class="fas fa-check"></i></button>';
                      }
                  }
              ]
          });

          $('#bahanTable tbody').on('click', '.check-bahan', function () {
              var valueKodeProduct = $('#valueKodeProduct').val();
              var kodeBahan = table.row($(this).parents('tr')).data().kode_bahan;

              if (kodeBahan === valueKodeProduct) {
                  // Menampilkan SweetAlert jika kode bahan sama dengan kode product
                  Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Data bahan dan produk tidak boleh sama!'
                  });
              } else {
                  // Lanjutkan pengisian elemen HTML di modal bahan jika kondisi lainnya memenuhi
                  var namaBahan = table.row($(this).parents('tr')).data().nama_bahan;
                  var stockBahan = table.row($(this).parents('tr')).data().stock_bahan;

                  $('#valueBahan').val(namaBahan);
                  $('#valueKodeBahan').val(kodeBahan);
                  $('#stockBahan').val(stockBahan);
                  $('#bahanModal').modal('hide');
              }
          });
      });

      //Data Product
      var products = [
        {"id": 1, "kode_product": "BHN008", "nama_product": "Lada Hitam", "stock": 25},
        {"id": 2, "kode_product": "BHN009", "nama_product": "Tahu", "stock": 60},
        {"id": 3, "kode_product": "BHN010", "nama_product": "Tempe", "stock": 55},
        {"id": 4, "kode_product": "BHN011", "nama_product": "Kacang Hijau", "stock": 35},
        {"id": 5, "kode_product": "BHN012", "nama_product": "Wortel", "stock": 75},
        {"id": 6, "kode_product": "BHN013", "nama_product": "Telur", "stock": 65},
        {"id": 7, "kode_product": "BHN014", "nama_product": "Susu", "stock": 45},
        {"id": 8, "kode_product": "PRD001", "nama_product": "Burger", "stock": 45},
         {"id": 9, "kode_product": "PRD002", "nama_product": "Pizza", "stock": 55},
         {"id": 10, "kode_product": "PRD003", "nama_product": "Hot Dog", "stock": 40},
         {"id": 11, "kode_product": "PRD004", "nama_product": "Spaghetti", "stock": 65},
         {"id": 12, "kode_product": "PRD005", "nama_product": "Sushi", "stock": 50},
         {"id": 13, "kode_product": "PRD006", "nama_product": "Ice Cream", "stock": 75},
         {"id": 14, "kode_product": "PRD007", "nama_product": "Pancake", "stock": 30},
         {"id": 15, "kode_product": "PRD008", "nama_product": "Donut", "stock": 60},
         {"id": 16, "kode_product": "PRD009", "nama_product": "Nugget", "stock": 55},
         {"id": 17, "kode_product": "PRD010", "nama_product": "French Fries", "stock": 70}
      ];

      //Dom modal Product
      $(document).ready(function () {
          var table = $('#productTable').DataTable({
              responsive: true,
              width: '100%',
              data: products,
              columns: [
                {
                data: null,
                render: function (data, type, row, meta) {
                    // Menggunakan meta.row untuk mendapatkan indeks baris dan menambahkan 1 untuk nomor urut
                    return meta.row + 1;
                }
            },
                  { data: 'kode_product'},
                  { data: 'nama_product' },
                  { data: 'stock' },
                  {
                      data: null,
                      className: 'text-center',
                      render: function (data, type, row) {
                       return '<button class="btn btn-primary check-product"><i class="fas fa-check"></i></button>';
                      }
                  }
              ]
          });
          $('#productTable tbody').on('click', '.check-product', function () {
                var data = table.row($(this).parents('tr')).data();
                var namaProduct = data.nama_product;
                var kodeProduct = data.kode_product;
                $('#valueProduct').val(namaProduct);
                $('#valueKodeProduct').val(kodeProduct);
                $('#productModal').modal('hide');
            });
      });

      //Dom Tabel
      $(document).ready(function() {
      var counter = 1;
      var initialQuantities = [];
      var addedBahanCodes = [];

    $("button[type='submit']").click(function(event) {
        event.preventDefault();
        var kodeBahan = $("#valueKodeBahan").val();
        if (addedBahanCodes.includes(kodeBahan)) {
           Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'Bahan dengan kode yang sama sudah ditambahkan sebelumnya!'
           });
           return;
       }
        var namaBahan = $("#valueBahan").val();
        var qtyBahan = $("#stockBahan").val();

        var dataBahan = data.find(function(item) {
            return item.kode_bahan === kodeBahan;
        });

        if (dataBahan && parseInt(qtyBahan) <= dataBahan.stock_bahan) {
            var newRow = "<tr>" +
                "<td>" + counter + "</td>" +
                "<td>" + kodeBahan + "</td>" +
                "<td>" + namaBahan + "</td>" +
                "<td><input class='quantityBahan form-control' type='number' value='" + qtyBahan + "'></td>" +
                "<td><button class='btn btn-danger btn-sm btn-delete'>Hapus</button></td>" +
                "</tr>";

            $("#daftarBahanTableBody").append(newRow);
            $("#valueKodeBahan").val("");
            $("#valueBahan").val("");
            $("#stockBahan").val("1");
            counter++;

            initialQuantities.push(parseInt(qtyBahan));
             addedBahanCodes.push(kodeBahan);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Kode bahan tidak ditemukan atau quantity melebihi stock!'
            });
        }
    });

    $("#daftarBahanTableBody").on("input", ".quantityBahan", function() {
          var inputQty = $(this).val();
          var rowIndex = $(this).closest("tr").index();
          var kodeBahan = $(this).closest("tr").find("td:eq(1)").text();
          var dataBahan = data.find(function(item) {
              return item.kode_bahan === kodeBahan;
          });

          if (parseInt(inputQty) > dataBahan.stock_bahan) {
              Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Quantity tidak boleh melebihi stock!'
              });

              $(this).val(initialQuantities[rowIndex]);
          } else {
              initialQuantities[rowIndex] = parseInt(inputQty);
          }
      });
    $("#daftarBahanTableBody").on("click", ".btn-delete", function() {
        var rowIndex = $(this).closest("tr").index();
        initialQuantities.splice(rowIndex, 1);
        $(this).closest("tr").remove();
        updateNumbering();
    });

    function updateNumbering() {
        var rowNumber = 1;
        $("#daftarBahanTableBody tr").each(function() {
            $(this).find("td:first").text(rowNumber);
            rowNumber++;
        });
    }
    $("#cetakModal").on("show.bs.modal", function(event) {
      // Menampilkan informasi produk di modal
      var kodeProduk = $("#valueKodeProduct").val();
      var namaProduk = $("#valueProduct").val();
      var qtyProduct = $("#qtyProduct").val();

      $("#kodeProduk").val(kodeProduk);
       $("#namaProduk").val(namaProduk);
       $("#quantityProduk").val(qtyProduct);

      // Menampilkan informasi bahan di modal
      $("#modalDaftarBahanTableBody").empty();
      $("#daftarBahanTableBody tr").each(function(index) {
        var kodeBahan = $(this).find("td:eq(1)").text();
        var namaBahan = $(this).find("td:eq(2)").text();
        var quantity = $(this).find(".quantityBahan").val();

        // Menambahkan baris ke tabel daftar bahan di modal
        var newRow = "<tr>" +
          "<td>" + (index + 1) + "</td>" +
          "<td>" + kodeBahan + "</td>" +
          "<td>" + namaBahan + "</td>" +
          "<td>" + quantity + "</td>" +
          "</tr>";
        $("#modalDaftarBahanTableBody").append(newRow);
        $("#modalDaftarBahanTable").DataTable();
      });
    });

});




$(document).ready(function() {
    $("#cetakBtn").click(function() {
        // Memeriksa apakah tabel #daftarBahanTableBody memiliki isian atau tidak
        var rowCount = $("#daftarBahanTableBody tr").length;
        if (rowCount === 0) {
            // Jika tidak ada data dalam tabel, tampilkan pesan error menggunakan SweetAlert
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tidak ada data bahan untuk dicetak!'
            });
        } else {
            // Jika ada data dalam tabel, tampilkan modal cetak
            $("#cetakModal").modal('show');
        }
    });
});
