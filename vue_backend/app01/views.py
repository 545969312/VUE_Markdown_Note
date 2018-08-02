from django.shortcuts import render
from app01 import models
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


def note_list(request):
    ret = {"code": 0}
    data = list(models.Note.objects.all().values("id", "title", "content", "markedcontent"))
    ret["data"] = data
    return JsonResponse(ret)


@csrf_exempt
def add(request):

    ret = {"code": 0}
    title = request.POST.get("title")
    content = request.POST.get("content")
    markedcontent = request.POST.get("markedConent")

    obj = models.Note.objects.create(
        title=title,
        content=content,
        markedcontent=markedcontent
    )
    ret["data"] = {
        "id": obj.id,
        "title": title,
        "content": content,
        "markedConent": markedcontent
    }
    return JsonResponse(ret)


def delete(request, delete_id):

    ret = {"code": 0}
    models.Note.objects.filter(id=delete_id).delete()
    return JsonResponse(ret)


@csrf_exempt
def edit(request):

    ret = {"code": 0}
    edit_id = request.POST.get("id")
    title = request.POST.get("title")
    content = request.POST.get("content")
    markedcontent = request.POST.get("markedConent")

    models.Note.objects.filter(id=edit_id).update(
        title=title,
        content=content,
        markedcontent=markedcontent
    )
    return JsonResponse(ret)
