using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CRUDZELDAGAMES.Models;

namespace CRUDZELDAGAMES.Controllers
{
    public class HomeController : Controller
    {
        NINTENDOGAMEEntities db = new NINTENDOGAMEEntities();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetZeldaGames()
        {
            try
            {
                var ZeldaGames = db.SP_GetZeldaGames();
                return Json(ZeldaGames, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex.Message, JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult AddZeldaGame(ZELDAGAMES game)
        {
            try
            {
                string message = "ok";
                db.SP_AddZeldaGame(game.Nombre, game.Año, game.Consola);
                return Json(message, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex.Message, JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult UpdZeldaGame(ZELDAGAMES game)
        {
            try
            {
                string message = "ok";
                var result = db.SP_UpdZeldaGame(game.Id,game.Nombre, game.Año, game.Consola, game.Visible);
                return Json(message, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex.Message, JsonRequestBehavior.AllowGet);
            }
        }

    }
}