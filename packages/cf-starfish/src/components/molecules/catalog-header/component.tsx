import * as React from "react";
import { Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';

interface Iprops {
  catalogHeaderTitle?: string;
  catalogHeaderDescription?: string;
}

export class CatalogHeaderComponent extends React.Component<Iprops, any> {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      modal: false
    };
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { catalogHeaderTitle, catalogHeaderDescription } = this.props;
    return (
      <Row>
        <Col sm="12" className="bt-catalog-header">
          <h1 className="bt-typo-displaylarge bt-catalog-header__title">{catalogHeaderTitle}</h1>
          <p className="bt-catalog-header__description">{catalogHeaderDescription}</p>
          <a className="bt-catalog-header__tnc" onClick={this.toggle} href="#">Lihat Syarat & Ketentuan</a>
          <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader className="bt-typo-displaysmall" toggle={this.toggle}>Syarat dan Ketentuan Promo</ModalHeader>
            <ModalBody>
              <p><strong>Cicilan Tanpa Kartu Kredit:</strong></p>
              <ul>
                <li>Cicilan 3, 6 dan 12 bulan untuk produk dengan harga Rp 1.500.000 sampai dengan Rp 20.000.000.</li>
                <li>
                  <a href="/promo/cicilan-tanpa-kartu-kredit">Info selengkapnya</a>
                </li>
              </ul>
              <p></p>
              <p><strong>Pakai dulu, bayar nanti:</strong></p>
              <ul>
                <li>Bayar dalam 30 hari untuk maksimal pembelian Rp 3.000.000.</li>
                <li>
                  <a href="/promo/pakai-dulu-bayar-nanti">Info selengkapnya</a>
                </li>
              </ul>
              <p></p>
              <p><strong>Pengguna Kartu Kredit BCA (BCA Card, Visa, atau MasterCard):</strong></p>
              <ul>
                <li>Promo khusus setiap hari senin</li>
                <li>Diskon Rp 200.000 gunakan kode <strong>BCAMONDAY200</strong></li>
                <li>Minimum pembelian Rp 2.000.000</li>
                <li>Diskon 10% tanpa minimum pembelian, gunakan kode BCAMONDAY10</li>
                <li>Info selengkapnya, klik <a href="/promo/gallery-bca">di sini</a>
                </li>
              </ul>
              <p></p>
              <p><strong>Cicilan Tanpa Kartu Kredit:</strong></p>
              <ul>
                <li>Cicilan 3, 6 dan 12 bulan untuk produk dengan harga Rp 1.500.000 sampai dengan Rp 20.000.000. Info selengkapnya klik <a href="/promo/gallery-bca">di sini</a>.
                </li>
              </ul>
              <p></p>
              <p><strong>Pengguna BNI Debit Online:</strong></p>
              <ul>
                <li>Diskon 150.000 dengan kode eCoupon: <strong>BDOSERU10</strong></li>
                <li>Minimal pembelian Rp 1.500.000</li>
                <li>Info selengkapnya, klik <a href="/promo/bni-shopping">di sini</a>
                </li>
              </ul>
              <p></p>
              <p><strong>Pengguna Kartu Kredit CIMB NIAGA:</strong></p>
              <ul>
                <li>Periode promo 1 Juni - 31 Desember 2017</li>
                <li>Diskon Rp 100.000, minimal transaksi Rp 2.000.000, gunakan kode eCoupon: <strong>BNKCIM100K</strong></li>
                <li>Diskon Rp 150.000, minimal transaksi Rp 3.000.000, gunakan kode eCoupon: <strong>BNKCIM150K</strong></li>
                <li>Info selengkapnya, klik <a href="/promo/cimb-clicks-today">di sini</a>
                </li>
              </ul>
              <p></p>
              <p><strong>Pengguna Kartu Kredit Maybank:</strong></p>
              <ul>
                <li>Tambahan diskon 15% untuk pembelian min. Rp. 1.250.000</li>
                <li>Gunakan eCoupon: <strong>FRIDAY15</strong></li>
                <li>Maksimal diskon Rp 200.000</li>
                <li>Hanya berlaku di hari Jumat untuk cicilan 0% Maybank dengan tenor 3,6,12 bulan</li>
                <li>eCoupon berlaku untuk 20 pengguna pertama setiap Jumat.</li>
                <li>Info selengkapnya, klik <a href="/promo/i-love-friday-with-maybank">di sini</a>
                </li>
              </ul>
              <p></p>
              <hr />
              <p><strong>Ketentuan Penggunaan:</strong></p>
              <ol>
                <li>Satu transaksi hanya bisa menggunakan satu kode eCoupon.</li>
                <li>Bagi member Bhinneka, setiap pembelian akan mendapatkan Bhinneka Point.</li>
                <li>Khusus member baru Bhinneka akan mendapatkan eCoupon belanja. <a href="/aspx/member/mbr_register.aspx">Daftar email di sini</a>.
                </li>
                <li>Metode pembayaran yang berlaku adalah pembayaran online, transfer bank, ATM otomatis dan cicilan 0% kartu kredit.</li>
                <li>Bhinneka Point, eCoupon dan Cicilan 0% bisa digunakan untuk semua produk di Bhinneka KECUALI produk yang dikirim oleh partner (Marketplace) Bhinneka.</li>
              </ol>
              <p></p>
              <p><strong>Syarat &amp; Kondisi:</strong></p>
              <ol>
                <li>Layanan gratis pengiriman ke lebih dari 100 kota besar di seluruh Indonesia. <a href="/aspx/others/oth_Free_Shipping.aspx">Info selengkapnya</a>.
                </li>
                <li>Jika terdapat lebih dari satu akun yang melakukan pengiriman ke satu alamat yang sama, maka hanya order pertama yang akan diproses dan yang lain akan dibatalkan.</li>
                <li>Bhinneka berhak melakukan pembatalan pesanan jika ditemui adanya pelanggaran atau penyalahgunaan promosi ini, serta membatalkan transaksi yang sudah berhasil dilakukan.</li>
                <li>Kebijakan dapat berubah sewaktu-waktu tanpa ada pemberitahuan sebelumnya, serta mutlak merupakan keputusan Bhinneka.</li>
              </ol>
              <p></p>
            </ModalBody>
          </Modal>
        </Col>
      </Row>
    );
  }
}

export default CatalogHeaderComponent;
