import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "../pages/Login";

axios.defaults.baseURL = "http://localhost:3000";

const UserContext = createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState();

  // yonlendirme methodunu tanımlama
  const navigate = useNavigate();

  // sayfa her yenılendıgınde otrumu en son acan kişimnin hesap bilgilerini al

  useEffect(() => {
    // idsini alma
    const id = localStorage.getItem("TOKEN");
    if (id) {
      // idsine gore hesap bilgilerini al

      axios
        .get(`/users/${id}`)
        .then((res) => {
          setActiveUser(res.data);
        })
        .catch((err) => toast.error("Could not retrieve user info"));
    } else {
      navigate("/login");
    }
  }, []);

  //   hesap oluşturma

  const signup = (user) => {
    axios.post("/users", user).then(() => {
      //1) oturumu acıkolan kullanıcını id sini locale kaydetmek
      localStorage.setItem("TOKEN", user.id);

      // 2) aktif kulanıcı stateini guncelle
      setActiveUser(user);

      // 3)anasayfata yonlendir
      navigate("/");

      // 4)bildirim ver

      toast.success("Registered successfully");
    });
  };

  // hesaba giriş yapma

  const login = (user) => {
    // veritabanından bu kullanıcı adı ve şifreyle eşleşen kullanıcıyı al
    axios
      .get(`/users?name=${user.name}&password=${user.password}`)
      .then((res) => {
        if (res.data.length === 0) {
          toast.error("User not found");
        } else {
          setActiveUser(res.data[0]);
          localStorage.setItem("TOKEN", res.data[0].id);
          navigate("/");
          toast.success("Signing in");
        }
      })
      .catch((err) => console.log(err));

    // kullanıcı gelmezse isim veya şifre yanlış bildirimi gönder

    // kullanıcı gelirse aktif kullanıcı olarak belirle
  };
  // hesaptan cıkma

  // hesabı sil

  // hesabı güncelle

  return (
    <UserContext.Provider value={{ activeUser, signup, login }}>
      {children}
    </UserContext.Provider>
  );
};
