import * as yup from "yup";

//const rulesUser = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;

// /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;
const rulesPass =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
const rulesName =
  "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
  "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
  "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
const relusComent =
  "^[a-zA-Z0-9_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
  "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
  "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
export const validate = yup.object().shape({
  name: yup
    .string()
    .matches(rulesName, { message: "(*) Vui lòng nhập đúng định dạng" })
    .required("(*) Vui lòng nhập họ tên"),

  email: yup
    .string()
    .email("(*) Vui lòng nhập đúng định dạng @gmail.com")
    .required("(*) Vui lòng nhập email"),
  password: yup
    .string()
    .min(5, "(*) Mật khẩu tối thiểu 5 ký tự")
    .matches(rulesPass, { message: "Mật Khẩu còn yếu: Name@123" })
    .required("(*) Vui lòng nhập mật khẩu"),
  confirmPassWord: yup
    .string()
    .oneOf([yup.ref("password"), null], "(*) Mật khẩu chưa đúng")
    .required("(*) Mật khẩu chưa đúng"),
  phone: yup
    .string()
    .min(9, "(*) Tối thiểu 9 số")
    .max(10, "(*) Tối đa 10 số")
    .required("(*) Vui lòng nhập số điện thoại"),

  birthday: yup.string().required(" (*) vui lòng không bỏ trống"),
});

export const validationJob = yup.object().shape({
  tenCongViec: yup.string().required(" (*) vui lòng nhập tên công việc"),
  danhGia: yup.number().min(0).max(10).required(" (*) vui lòng không bỏ trống"),
  giaTien: yup.number().min(0).max(20e6).required(" (*) vui lòng không bỏ trống"),
  nguoiTao: yup.number().min(0).required(" (*) vui lòng không bỏ trống"),

  
  moTa:yup.string().required(" (*) vui lòng không bỏ trống"),
  maChiTietLoaiCongViec: yup.number().min(0).required(" (*) vui lòng không bỏ trống"),
  moTaNgan:yup.string().required(" (*) vui lòng không bỏ trống"),

  saoCongViec: yup.number().min(0).required(" (*) vui lòng không bỏ trống"),
});



export const validateInfo = yup.object().shape({
  name: yup
    .string()
    .matches(rulesName, { message: "(*) Vui lòng nhập đúng định dạng" })
    .required("(*) Vui lòng nhập họ tên"),

  email: yup
    .string()
    .email("(*) Vui lòng nhập đúng định dạng @gmail.com")
    .required("(*) Vui lòng nhập email"),
  password: yup
    .string()
    .min(5, "(*) Mật khẩu tối thiểu 5 ký tự")
    .matches(rulesPass, { message: "Mật Khẩu còn yếu: Name@123" })
    .required("(*) Vui lòng nhập mật khẩu"),
  phone: yup
    .string()
    .min(9, "(*) Tối thiểu 9 số")
    .max(10, "(*) Tối đa 10 số")
    .required("(*) Vui lòng nhập số điện thoại"),

  birthday: yup.string().required(" (*) vui lòng không bỏ trống"),
});

export const validateInfoAdmin = yup.object().shape({
  matKhau: yup
    .string()
    .min(5, "(*) Mật khẩu tối thiểu 5 ký tự")
    .matches(rulesPass, { message: "Mật Khẩu còn yếu: Name@123" })
    .required("(*) Vui lòng nhập mật khẩu"),

  email: yup
    .string()
    .email("(*) Vui lòng nhập đúng định dạng @gmail.com")
    .required("(*) Vui lòng nhập email"),
  soDt: yup
    .string()
    .min(9, "(*) Tối thiểu 9 số")
    .max(10, "(*) Tối đa 10 số")
    .required("(*) Vui lòng nhập số điện thoại"),
  hoTen: yup
    .string()
    .matches(rulesName, { message: "(*) Vui lòng nhập đúng định dạng" })
    .required("(*) Vui lòng nhập họ và tên"),
});

export const validateComment = yup.object().shape({
  maCongViec: yup.number().min(0).required(" (*) vui lòng không bỏ trống") ,
  maNguoiBinhLuan: yup.number().min(0).required(" (*) vui lòng không bỏ trống"),
  ngayBinhLuan: yup.string().required(" (*) vui lòng không bỏ trống"),
  noiDung: yup.string().required(" (*) vui lòng không bỏ trống"),
  saoBinhLuan: yup.number().min(0).required(" (*) vui lòng không bỏ trống")
})

export const validationComment = yup.object().shape({
  noiDung: yup
    .string()
    .matches(relusComent, { message: "(*) Please enter the correct format" })
    .required("(*)Please Input Value"),
});