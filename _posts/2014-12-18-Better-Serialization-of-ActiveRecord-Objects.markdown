---
layout: post
title: Better Serialization of ActiveRecord Objects
categories: ['serialization', 'yaml', 'rails']
---

I have a personal project that includes a good deal of serialization of json arrays to for storage and retrieval in redis. Lately, YAML has been giving me errors when trying to deserialize arrays of hashes that came from ActiveRecord queries. It kept telling me that <Class Name> was not a method.

It turns out that when you do Query.scope(params).to_a.to_json, the class name gets included as JSON type. So if I had Match.query(1).to_a, I'd get <Match: [{results: results}], which would then get serialized, and hopefully deserialized. More often than not, YAML doesn't like deserialzing these types of things.

The solution is simple. If you use `#as_json` instead of `#to_json`, you end up with an array of hashes, free of the class name in ActiveRelation. Now YAML seems happy, and I can keep coding.