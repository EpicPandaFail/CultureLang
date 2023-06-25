public IActionResult SetCulture(string culture)
        {
            CookieOptions option = new CookieOptions();
            option.Expires = DateTime.Now.AddDays(21);
            Response.Cookies.Append("culture", culture, option);
            return Ok();
        }
