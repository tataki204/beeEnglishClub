from rest_framework.views import APIView
from rest_framework.response import Response

class HelloView(APIView):
    def get(self, request):
        return Response({"message": "Сайн байна уу you bna daa!"})
    
class GoodbyeView(APIView):
    def get(self, request):
        return Response({"message": "Сайн байна уу Django!"})