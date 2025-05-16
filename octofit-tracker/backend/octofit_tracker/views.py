from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer, TeamSerializer, ActivitySerializer, LeaderboardSerializer, WorkoutSerializer
from .models import User, Team, Activity, Leaderboard, Workout

@api_view(['GET'])
def api_root(request, format=None):
    # Replace with your actual Codespace name or set dynamically
    codespace_url = 'https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/'
    local_url = 'http://localhost:8000/'
    return Response({
        'users': codespace_url + 'api/users/?format=api',
        'teams': codespace_url + 'api/teams/?format=api',
        'activities': codespace_url + 'api/activities/?format=api',
        'leaderboard': codespace_url + 'api/leaderboard/?format=api',
        'workouts': codespace_url + 'api/workouts/?format=api',
        'users_local': local_url + 'api/users/?format=api',
        'teams_local': local_url + 'api/teams/?format=api',
        'activities_local': local_url + 'api/activities/?format=api',
        'leaderboard_local': local_url + 'api/leaderboard/?format=api',
        'workouts_local': local_url + 'api/workouts/?format=api',
    })

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class LeaderboardViewSet(viewsets.ModelViewSet):
    queryset = Leaderboard.objects.all()
    serializer_class = LeaderboardSerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer
