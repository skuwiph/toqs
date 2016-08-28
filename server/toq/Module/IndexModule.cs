namespace toq.Module
{
    using System;
    using System.Collections.Generic;
    using Nancy;
    using MongoDB.Driver;

    public class IndexModule : NancyModule
    {
        public IndexModule()
        {
            _client = new MongoClient(new MongoUrl("mongodb://192.168.0.26/"));
            _database = _client.GetDatabase("test");

            Get["/"] = _ => "Nancy: Hello";
            Get["/os"] = _ => Environment.OSVersion.ToString();
            Get["mongo"] = GetMongoStatus;
        }

        private dynamic GetMongoStatus(dynamic arg)
        {


            return HttpStatusCode.OK;
        }

        protected static IMongoClient _client;
        protected static IMongoDatabase _database;
    }
}
