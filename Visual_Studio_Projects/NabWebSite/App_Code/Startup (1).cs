using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NabWebSite.Startup))]
namespace NabWebSite
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
