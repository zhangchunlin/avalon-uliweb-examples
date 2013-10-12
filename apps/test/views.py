#coding=utf-8
from uliweb import expose, functions

#testlink
def tl(r):
    l = ["<strong>"]
    for index in r:
        l.append('<a href="test%d">⚑test%d</a> '%(index,index))
    l.append("</strong>")
    return " ".join(l)

@expose('/')
def index():
    return {"tl":tl}

@expose('/test<id>')
def test(id):
    response.template = "test"+id+".html"
    return {}
