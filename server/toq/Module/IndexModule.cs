namespace toq.Module
{
    using System;
    using System.Collections.Generic;
    using Nancy;

    public class IndexModule : NancyModule
    {
        public IndexModule()
        {
            Get["/"] = _ => "Nancy: Hello";
            Get["/os"] = _ => Environment.OSVersion.ToString();
        }
    }
}
