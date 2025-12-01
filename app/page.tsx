"use client";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

export default function Home() {
  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: "#f0f4f8" }}>
      {/* Header */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#222" }}>
          Welcome, Jeff 🏆
        </Text>
        <Text style={{ fontSize: 16, color: "#555" }}>Score: 63.15</Text>
      </View>

      {/* Upcoming Games */}
      <View style={{ marginBottom: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 10 }}>
          Upcoming Games
        </Text>

        {[
          { teams: "West Ham vs Man City", time: "Sat 3:00 PM" },
          { teams: "FC Utrecht vs AFC Ajax", time: "Sun 5:30 PM" },
          { teams: "AS Monaco vs Toulouse", time: "Mon 8:00 PM" },
        ].map((match, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: 15,
              borderRadius: 10,
              marginBottom: 10,
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 5,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>{match.teams}</Text>
            <Text style={{ fontSize: 14, color: "#888" }}>{match.time}</Text>
          </View>
        ))}
      </View>

      {/* Betting Options */}
      <View>
        <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 10 }}>
          Place Your Bets
        </Text>

        {[
          { match: "FC Cartagena vs Real Betis", odds: "2.15" },
          { match: "Real Betis vs FC Cartagena", odds: "2.15" },
          { match: "SC Freiburg vs FC Cartagena", odds: "2.15" },
        ].map((bet, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: 15,
              borderRadius: 10,
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 5,
            }}
          >
            <View>
              <Text style={{ fontSize: 16 }}>{bet.match}</Text>
              <Text style={{ fontSize: 14, color: "#888" }}>Odds: {bet.odds}</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#28a745",
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 6,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>Bet</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
