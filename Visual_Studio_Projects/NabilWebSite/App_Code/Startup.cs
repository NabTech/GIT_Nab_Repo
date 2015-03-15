using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NabilWebSite.Startup))]
namespace NabilWebSite
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
